import { SearchObject } from '@/types'
import scrapeProducts from '@/utils/scrapeProducts'
import { QueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

export const queryClient = new QueryClient()

queryClient.setMutationDefaults(['getProducts'], {
    mutationFn: async (searchObject: SearchObject) => {
        return await scrapeProducts(searchObject)
    },

    onError: (err, variables) => {
        console.error(err)
        toast.error('אירעה שגיאה במהלך החיפוש...')
    },
    networkMode: 'online',
})
