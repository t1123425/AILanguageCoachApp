'use client'
import { GoogleAnalytics } from 'nextjs-google-analytics'
const GaBlock = () => {
    return <GoogleAnalytics trackPageViews gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
}

export default GaBlock;