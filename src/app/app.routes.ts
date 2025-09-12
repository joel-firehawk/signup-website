import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home').then((m) => m.Home);
        }
    },
    {
        path: 'posts',
        loadComponent: () => {
            return import('./posts/posts').then((m) => m.Posts);
        }
    },
    {
        path: 'add-post',
        loadComponent: () => {
            return import('./add-post/add-post').then((m) => m.AddPost);
        }
    },
    {
        path: 'login',
        loadComponent: () => {
            return import('./login/login').then((m) => m.Login);
        }
    },
    {
        path: 'account-settings',
        loadComponent: () => {
            return import('./account-settings/account-settings').then((m) => m.AccountSettings);
        }
    }
];