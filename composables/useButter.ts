import butter from "buttercms"
const butterCMS = butter("28efc4e8aa2b9049e1c620aa192209fca842ac9d")
import {ref} from "vue"

export default function useButter(){
  async function getLandingPage(){
    const res = await butterCMS.page.retrieve('*', 'landing-page-with-components')
    return ref(res.data.data)
  }

  async function getNavMenu(){
    const res = await butterCMS.content.retrieve(['navigation_menu'])
    return ref(res.data.data.navigation_menu[0])
  }
  
  return {
    getLandingPage,
    getNavMenu
  }
}
