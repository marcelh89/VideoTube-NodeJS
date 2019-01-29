VideoTube-NodeJs
===

This project called VideoTube-NodeJs is a Youtube clone build with __NodeJs__

which is inspired by the VideoTube project of the udemy course __Make a YouTube Clone from Scratch: JavaScript PHP and MySQL__ by *Reece Kenney*


Instructions
---

1. Copy config.template.json to config.json and fill out database user and password
    ``` cp config.template.json ```

    ```
    {
        "host": "localhost",
        "user": "<fillout>",
        "password": "<fillout>",
        "database": "videotube"
    }
    ```

1. Install dependencies
    ``` yarn install ``` or ``` npm install ```

2. run server
    ``` node server.js```