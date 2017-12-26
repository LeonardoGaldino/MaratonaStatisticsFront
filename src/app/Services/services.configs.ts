export const API_ROUTES = {
    'allCompetitors': 'http://localhost:8000/api/competitors',
    'singleCompetitor': (handle) => {
        return `http://localhost:8000/api/competitors/${handle}`;
    },
    'allRatings': 'http://localhost:8000/api/ratings',
    'competitorRatings': (handle) => {
        return `http://localhost:8000/api/ratings/${handle}`;
    }
}