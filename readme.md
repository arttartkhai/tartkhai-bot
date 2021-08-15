# Tartkhai Bot

> A chatbot on [Line Platform](https://line.me/en/) which can tell information about crypto world such as price, volume, market cap, etc.

## Built With

* **Node.js**

## Application Demo

[demo video](./public/demo-bot.gif)

## Getting Started

1. [create your own Line OA](https://developers.line.biz/en/docs/messaging-api/getting-started/)
2. [get api key from coinmarketcap](https://coinmarketcap.com/api/)
2. set up .env
    - `CHANNEL_ACCESS_TOKEN` `CHANNEL_SECRET` get from step1 (after created your Line Channel)
    - `COINMARKETCAP_API_KEY` get from step2
    
### for development setup
1.  ``` bash 
      $ npm run dev
    ```
  

2. run [ngrok](https://ngrok.com/) of application's port for a tunnel (default port is 8084, you can change by specify `PORT` in .env)
for example
    ``` bash 
      $ ./ngrok http -region=ap 8084
    ```

3. after getting ngrok url(tunnel), put `https:{{your_tunnel_url}}/webhook/bot` into your channel's webhook at [Line developer console](https://developers.line.biz/console/)
[webhook-setting](./public/webhook-setting.png)
4. (optional) set up .env `DEBUG_MODE=true`. This will allow application showing log of every incoming event from line chat

To get a local copy up and running follow these simple example steps.


## Authors

👤 **Chutiwat** (Developer)

- GitHub: [@arttartkhai](https://github.com/arttartkhai)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/chutiwat-chantasilp-9aa39b1a1)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/arttartkhai/tartkhai-bot/issues).

## Show your support

Give a ⭐️ if you like this project!
