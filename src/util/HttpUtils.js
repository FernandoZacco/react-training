const httpMethod = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
}

const httpMode = {
    CORS: 'cors',
    NO_CORS: 'no-cors',
    SAME_ORIGIN: 'same-origin',
}

const httpCache = {
    DEFAULT: 'default',
    NO_CACHE: 'no-cache',
    RELOAD: 'reload',
    FORCE_CACHE: 'force-cache',
    ONLY_IF_CACHED: 'only-if-cached',
}

const httpCredential = {
    INCLUDE: 'include',
    SAME_ORIGIN: 'same-origin',
    OMIT: 'omit',
}

const httpContentType = {
    APPLICATION_JSON: 'application/json',
    APPLICATION_X_WWW_FORM_URLENCODED: 'application/x-www-form-urlencoded',
    TEXT_HTML: 'text/html',
    CHARSET_UTF8: 'charset=UTF-8',
    MULTIPART_FORM_DATA: 'multipart/form-data',
    BOUNDARY_SOMETHING: 'boundary=something'
}

const signedGet = async (url, queryParams) => {
    const searchParams = new URLSearchParams(queryParams);
    searchParams.append('APPID', process.env.REACT_APP_OPEN_WHEADER_API_KEY);
    const urlWithQueryParams = searchParams ? `${url}?${searchParams.toString()}` : url;
    return fetch(urlWithQueryParams, {
        method: httpMethod.GET,
    });
}

export {
    httpMethod,
    httpContentType,
    httpCredential,
    httpMode,
    httpCache,
    signedGet,
}