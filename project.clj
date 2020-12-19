(defproject kubsu-game "0.1.1"
  :description "A multiuser card game/learning project."
  :url "https://github.com/oumptrain/kubsu-game"
  :main ^:skip-aot kubsu-game.core
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [server-socket "1.0.0"]])
