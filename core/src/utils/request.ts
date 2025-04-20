import ky from 'ky'

const kyIns = ky.create({ prefixUrl: '', timeout: 60 * 1000 })
const http = kyIns.extend({
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

export default http
