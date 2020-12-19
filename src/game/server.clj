(ns game.server
  (:gen-class)
  (:require [org.httpkit.server :as server]
            [compojure.core :refer :all]
            [compojure.route :as route]))

(defn fps-handler [req]
  "Функция обработки GET запросов."
  {:status  200
   :headers {"Content-Type" "text/html"}
   :body    "Body!"})

(defroutes app-routes
  "Привязка функций для обработки HTTP запросов."
  (GET "/" [] fps-handler)
  (route/not-found "<h1>404. Страница не найдена.</h1><a href=\"/\">Вернуться на главную</a>"))

(defn -main [& args]
  "Входная точка работы приложения. Запуск сервера."
  (let [port (Integer/parseInt (or (System/getenv "PORT") "8080"))]
    (server/run-server #'app-routes {:port port})
    (println (str "Запуск сервера по адресу - http:/127.0.0.1:" port "/"))))