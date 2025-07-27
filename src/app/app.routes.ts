import { Routes } from '@angular/router';
import { SignIn } from './pages/sign-in/sign-in';
import { AdminCreateAccount } from './pages/admin-create-account/admin-create-account';
import { Homepage } from './pages/homepage/homepage';
import { Feed } from './pages/feed/feed';
import { Article } from './pages/article/article';
import { Gif } from './pages/gif/gif';
import { ArticleDetails } from './pages/article/article-details/article-details';

export const routes: Routes = [
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    { path: 'signin', component: SignIn },
    { path: 'admin/create-account', component: AdminCreateAccount },
    { path: 'homepage', component: Homepage },
    { path: 'feed', component: Feed },
    { path: 'article', component: Article },
    { path: 'gif', component: Gif },
    { path: 'articleDetails/:id', component: ArticleDetails, title: 'Article Details Page' },
];
