export const API_ROUTES = {
    'allCompetitors': 'http://67.207.87.198:8001/api/competitors',
    'singleCompetitor': (handle) => {
        return `http://67.207.87.198:8001/api/competitors/${handle}`;
    },
    'allRatings': 'http://67.207.87.198:8001/api/ratings',
    'competitorRatings': (handle) => {
        return `http://67.207.87.198:8001/api/ratings/${handle}`;
    }
}