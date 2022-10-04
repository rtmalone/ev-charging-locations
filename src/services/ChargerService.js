export const getChargePoints = () => {
    const url = `https://api.openchargemap.io/v3/poi?latitude=35.055&longitude=-85.310&output=json&countrycode=US&maxresults=20&compact=true&levelid=3`

    return fetch(url, {
        headers: {
            "X-API-Key": "c996928d-fe0c-4ff4-b6a2-4655556bcba5"
        }
    })
}

export const createSession = ({userId, carId, chargerId}) => {
    // fetch('https://example.ev.energy/chargingsession', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type' : 'application/json'
    //     },
    //     body: JSON.stringify({
    //         user: userId,
    //         car_id: carId,
    //         charger_id: chargerId
    //     })
    // })

    // Merely so I can mock a successful call.
    return Promise.resolve()
}