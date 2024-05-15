import Header from '@/components/Header';

import './globals.scss';
import ReduxProvider from '@/store/ReduxProvider';
import {GoogleAnalytics} from '@next/third-parties/google'

export const metadata = {
    metadataBase: 'https://www.zoomtanzania.net',
    title: 'Zoom Tanzania Free CV Resume Maker',
    description:
        'Zoom Tanzania CV Resume maker is a tool that helps you create a resume that works with job application systems. It makes sure you look good to employers.',
    openGraph: {
        title: 'Zoom Tanzania',
        images: `/favicon.png`,
        icons: {
            icon: `/faviconi.png`,
        },
        type: 'website',
    },
    alternates: {
        canonical: '/',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ReduxProvider>
                    <Header />
                    <div className="mx-auto  min-h-[calc(100vh-3rem)]">{children}</div>
                </ReduxProvider>
                <GoogleAnalytics gaId='G-WPXWXJ9MC2' />
            </body>
        </html>
    );
}