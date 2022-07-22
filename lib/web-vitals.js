export const sendAnalytics = ({ name, delta, value, id }) => {

    window.dataLayer.push({
        event: 'coreWebVitals',
        webVitalsMeasurement: {
            metric_name: name,
            metric_id: id,
            metric_value: value,
            metric_delta: delta,
            metric_rating: 'good',
            value: delta,
            debug_info: ''
        },
    });

}