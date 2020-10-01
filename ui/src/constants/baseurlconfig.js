const dev ={
    BASE_URL: "http://localhost:8080"
}

const prod={
    BASE_URL: ""
}

export const config = process.env.NODE_ENV === "development"? dev:prod;