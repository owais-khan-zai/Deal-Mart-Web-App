import React from 'react'
import Analytics from '../partials/dashboardPartials/Analytics'
import Profile from '../partials/dashboardPartials/Profile'
import Wishlist from '../partials/dashboardPartials/Wishlist'
import Setting from '../partials/dashboardPartials/Setting'


export const RoutesData = [
    {
        path: 'analytics',
        element: <Analytics/>
    },
    {
        path: 'profile',
        element: <Profile/>
    },
    {
        path: 'wishlist',
        element: <Wishlist/>
    },
    {
        path: 'setting',
        element: <Setting/>
    }
]