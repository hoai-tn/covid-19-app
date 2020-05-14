import React, {useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css';
const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setfetchedCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setfetchedCountries( await fetchCountries());
        }
        fetchAPI();

    }, [setfetchedCountries])//change when setfetch before different 

    return (
        <div className={styles.container}>
            <FormControl className={styles.formControl}>
                <NativeSelect   onChange={(e) => handleCountryChange(e.target.value)} >   
                    { fetchedCountries.map((country, index) => {
                        return  <option
                            key={index} 
                            value={country}>{country}</option>
                    })}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
export default CountryPicker;