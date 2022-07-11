//JS SDK REPO: https://github.com/ButterCMS/buttercms-js
//JS SDK DOCS: https://buttercms.com/docs/api/?javascript#

import butter from "buttercms"
const butterCMS = butter("3083dce7e35eea649511101bf0dad90099363a46")
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