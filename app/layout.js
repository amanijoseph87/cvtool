import Header from '@/components/Header';
import './globals.scss';
import ReduxProvider from '@/store/ReduxProvider';
import {GoogleAnalytics} from '@next/third-parties/google'

export const metadata = {
    metadataBase: new URL('https://cv.zoomtanzania.net'),
    title: 'Jinsi ya Kutengeneza CV | Zoom Tanzania Free CV Resume Maker',
    url: 'https://cv.zoomtanzania.net/',
    description:
        'Jifunze jinsi ya kutengeneza CV bora na ya kitaalamu kwa kutumia Zoom Tanzania CV Resume maker. Tumia zana yetu bure kutengeneza CV inayovutia waajiri na kuongeza nafasi zako za kupata kazi.',
    robots: {
        index: true,
        follow: true,
        nocache: true, 
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
        userScalable: false,
    },
    openGraph: {
        title: 'Jinsi ya Kutengeneza CV | Zoom Tanzania',
        description: 'Jifunze jinsi ya kutengeneza CV bora na ya kitaalamu kwa kutumia Zoom Tanzania CV Resume maker',
        url: 'https://cv.zoomtanzania.net/',
        images: [
            {
                url: 'https://cv.zoomtanzania.net/favicon.png',
                width: 800,
                height: 600,
                alt: 'Zoom Tanzania CV Maker',
            }
        ],
        siteName: 'Zoom Tanzania CV Maker',
        type: 'website',
        locale: 'sw_TZ',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Jinsi ya Kutengeneza CV | Zoom Tanzania Free CV Resume Maker',
        description: 'Jifunze jinsi ya kutengeneza CV bora na ya kitaalamu kwa kutumia Zoom Tanzania CV Resume maker',
        images: ['https://cv.zoomtanzania.net/favicon.png'],
        site: '@zoomtanzania',
    },
    alternates: {
        canonical: 'https://cv.zoomtanzania.net/',
    },
    icons: {
        icon: '/faviconi.png',
        apple: '/apple-icon.png',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="sw">
            <head>
                {/* Any additional scripts or links you need */}
            </head>
            <body>
                <ReduxProvider>
                    <Header />
                    <div className="mx-auto min-h-[calc(100vh-3rem)]">{children}</div>
                </ReduxProvider>
                <GoogleAnalytics gaId='G-18MEJD9E8Z' />
            </body>
        </html>
    );
}
