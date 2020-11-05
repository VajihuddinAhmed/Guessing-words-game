const getpuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

        if (response.status === 200) {
            const data = await response.json()
            return data.puzzle
        } else {
            throw new Error('Unable to fetch puzzle data')
        }
}


const getCurrentCountry = async () => {
    const location = await getLocation()
    return countryData(location.country)
}

const countryData = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all')

        if (response.status === 200) {
            const data = await response.json()
            return data.find((country) => country.alpha2Code === countryCode)
        } else {
            throw new Error('unable to fetch data')
        }
}


const getLocation = async () => {
    const response = await fetch('http://ipinfo.io/json?token=32151d15a44a37')

        if (response.status === 200) {
            const data = await response.json()
            return data
        } else {
            throw new Error('Unable to fetch location')
        }
}

