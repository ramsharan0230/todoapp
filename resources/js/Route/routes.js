import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Dashboard from '../components/Dashboard.vue'

export const routes = [
    {
        path:'/',
        name: 'dashboard'
    },

    {
        path:'/dashboard',
        component:Dashboard
    },
    
    {
        path:'/login',
        component:Login
    },
    { 
        path:'/register',
        component:Register
    },

];