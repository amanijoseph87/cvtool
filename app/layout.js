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
    openGraph: {
        title: 'Jinsi ya Kutengeneza CV | Zoom Tanzania',
        description: 'Jifunze jinsi ya kutengeneza CV bora na ya kitaalamu kwa kutumia Zoom Tanzania CV Resume maker',
        images: `/favicon.png`,
        icons: {
            icon: `/faviconi.png`,
        },
        type: 'website',
        locale: 'sw_TZ',
    },
    alternates: {
        canonical: 'https://cv.zoomtanzania.net/',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="sw">
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
