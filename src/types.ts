export enum Visibility {
    Great = 'great',
    Good = 'good',
    Ok = 'ok',
    Poor = 'poor'
}


export enum Weather {
    Sunny = 'sunny',
    Rainy = 'rainy',
    Cloudy = 'cloudy',
    Windy = 'windy',
    Stormy = 'stormy'
}

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id'| 'date'|'weather'|'visibility'>
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
export type newDiaryEntry = Omit<DiaryEntry, 'id'>


export interface DiaryEntry {
    id: number,
    date: string
    weather: Weather
    visibility: Visibility
    comment: string
}


