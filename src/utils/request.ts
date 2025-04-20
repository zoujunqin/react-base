import ky from 'ky'

const kyIns = ky.create({ prefixUrl: import.meta.env.VITE_API_BASE_URL, timeout: 60 * 1000 })

const request = kyIns.extend({
    hooks: {
        beforeRequest: [
            (request, option) => {
                console.log(request, option)
            }
        ],

        beforeRetry: [],

        afterResponse: [(request, option, response) => {}]
    }
})

export default request
