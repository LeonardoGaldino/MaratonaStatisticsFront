let API_URL = 'http://localhost:8000/api'; 

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
