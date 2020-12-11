(ns mire.commands
  (:use [mire maps])
  (:use [clojure.contrib str-utils]))

;; Command functions

(defn view-map
  "Returns the whole map."
  []
  (str @*main-map*))

(defn move-north
  []
  (let [change-map (fn [x] (vector 1 1 1 0 0 0 1 1 1))]
    (dosync (alter *main-map* change-map)))
  (str "Success!"))

(defn move-south
  []
  (str "Code for change map"))

(defn move-east
  []
  (str "Code for change map"))

(defn move-west
  []
  (str "Code for change map"))

;; Command data

(def commands {"view-map" view-map
               "n" move-north
               "s" move-south
               "e" move-east
               "w" move-west})

;; Command handling

(defn execute
  "Execute a command that is passed to us."
  [input]
  (let [[command & args] (re-split #"\s+" input)]
    (apply (commands command) args)))