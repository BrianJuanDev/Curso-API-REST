import { Visibility, Weather, newDiaryEntry } from "./types";

const parseComment = (commentFromRequest: any): string => {
    if (!isString(commentFromRequest)) {
        throw new Error('incorrect o missing comment')
    };

    return commentFromRequest;
}

const parseDate = (dateFromRequest: any): string => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('error o missing date')
    }
    
    return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
    if (!isString(weatherFromRequest) || (!isWeather(weatherFromRequest))){
        throw new Error('error missing weather');
    }

    return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
    if (!isString(visibilityFromRequest) || (!isVisibility(visibilityFromRequest))) {
        throw new Error('error missing visibility')
    };

    return visibilityFromRequest;
}

const isString = (string: string): boolean => {
    return typeof string === 'string'
}

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date))
}

const isWeather = (param: any): boolean => {
    return Object.values(Weather).includes(param);
}

const isVisibility = (param: any): boolean => {
    return Object.values(Visibility).includes(param);
}

const toNewDiaryEntry = (object: any): newDiaryEntry => {
    const newEntry: newDiaryEntry= {
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
        comment: parseComment(object.comment)
    }
    
    return newEntry;
}


export default toNewDiaryEntry