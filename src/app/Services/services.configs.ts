let API_URL = 'http://67.207.87.198:8001/api'; 

let API_ROUTES = {
    'allCompetitors': `${API_URL}/competitors`,
    'singleCompetitor': (handle) => {
        return `${API_URL}/competitors/${handle}`;
    },
    'allRatings': `${API_URL}/ratings`,
    'competitorRatings': (handle) => {
        return `${API_URL}/ratings/${handle}`;
    }
}

export { API_ROUTES }
