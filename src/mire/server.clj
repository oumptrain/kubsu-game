(ns mire.server
    (:use [mire commands player maps session])
    (:use [clojure.contrib server-socket duck-streams]))

(def port 3333)
(def prompt "> ")

(defn start-session [player-name]
  (binding [*player-name* player-name]

           ;; returns start data to client
           (print prompt) (flush)

           (loop [input (read-line)]
             ;; gets the move and makes it
             (println (execute input))
             ;; returns data to client
             (print prompt) (flush)
             (recur (read-line)))))

(defn mire-handle-client [in out]
  (binding [*in* (reader in)
            *out* (writer out)]
           (print "\nWhat is your name?\n") (flush)
           (let [player-name (read-line)]
             (dosync (alter *players* conj player-name))
             (println "Wait...")

             (loop [n (count @*players*)]
               (if (= n 2)
                 (start-session player-name)
                 (recur (count @*players*)))))))

(def server (create-server port mire-handle-client))