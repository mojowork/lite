import Tabs from './Tabs'
import Tab from './Tab'

Tabs.install = function (Vue) {
    Vue.component(Tabs.name, Tabs) 
}

Tab.install = function (Vue) {
    Vue.component(Tab.name, Tab) 
}

export {
    Tabs,
    Tab
}