// import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  // Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Layout from "./template/_Layout";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import styles from "~/styles/main.css"
// import icons from '@mui/icons-material'
// import styles from '@mui/material'

export const links: LinksFunction = () => [
  {rel:"stylesheet", href: bootstrap},
  {rel:"stylesheet", href: styles},
  // {rel:"stylesheet", href: styles},
  // { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  // { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
  // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap' },
  // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
  // {rel:"stylesheet", href: icons},
  // ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
