import { getDebugInfo, getRating } from 'subcollection'

export const sendAnalytics = ({ name, delta, value, id, entries }) => {

    console.log(getRating(name, value))
    console.log(getDebugInfo(name, entries))

    window.dataLayer.push({
        event: 'coreWebVitals',
        webVitalsMeasurement: {
            metric_name: name,
            metric_id: id,
            metric_value: value,
            metric_delta: delta,
            metric_rating: getRating(name, value),
            value: delta,
            debug_info: getDebugInfo(name, entries)
        },
    });

}