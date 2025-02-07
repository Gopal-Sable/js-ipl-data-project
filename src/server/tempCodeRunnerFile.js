let extras={}
deliveries.forEach(delivery => {
    if(data.has(delivery.match_id)){
        let team=delivery.bowling_team;
        let extraRuns=delivery.extra_runs;
        if (!extras[team]) {
            extras[team]=0
        }
        extras[team]+=extraRuns;
    }
});
console.log(extras);
