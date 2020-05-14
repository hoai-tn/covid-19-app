import React from 'react';
import { Chart, Cards, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import imgCovid from './covid.png';
class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({
            data: fetchedData,
            country: country
        })
    }
    async componentDidMount() {
      const fetchedData = await fetchData();
     this.setState({data: fetchedData})
   }
    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img src={imgCovid} width='30%' alt='Covid 19'/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>   
                <Chart data={data} country={country}/>

            </div>
        )
    }
}
export default App;