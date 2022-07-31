const superbowlWin = teamRecord => {
    const winner = teamRecord.find(teamRecord => teamRecord.result.toUpperCase() === "W")
    return (winner === undefined) ? winner : winner.year
}

