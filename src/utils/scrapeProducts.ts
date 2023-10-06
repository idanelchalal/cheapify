import { SearchObject } from '@/types'
import axios from 'axios'

export default async function (searchObject: SearchObject) {
    return await axios.post('/api/scrape', searchObject)
}
