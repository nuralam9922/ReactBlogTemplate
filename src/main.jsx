import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home.jsx'));
const CreateBlog = React.lazy(() => import('./pages/CreateBlog.jsx'));
const Profile = React.lazy(() => import('./pages/Profile.jsx'));
const BlogDetails = React.lazy(() => import('./pages/BlogDetails.jsx'));
const SearchPage = React.lazy(() => import('./pages/SearchPage.jsx'));
const Categories = React.lazy(() => import('./pages/Categories.jsx'));
const TrendingBlogs = React.lazy(() => import('./pages/TrendingBlogs.jsx'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/create-blog',
				element: <CreateBlog />,
			},
			{
				path: '/profile',
				element: <Profile />,
			},
			{
				path: '/blog-details/:id',
				element: <BlogDetails />,
			},
			{
				path: '/search',
				element: <SearchPage />,
			},
			{
				path: '/categories',
				element: <Categories />,
			},
			{
				path: '/trending-blogs',
				element: <TrendingBlogs />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
