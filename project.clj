(defproject game "0.1.1"
  :author "Group #35"
  :description "A multiuser card game/learning project."
  :url "https://github.com/oumptrain/kubsu-game"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [http-kit "2.3.0"]
                 [compojure "1.6.1"]]
  :main ^:skip-aot game.server)
