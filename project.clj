(defproject game "0.1.1"

  :description "Card game"

  :url "https://github.com/oumptrain/kubsu-game"

  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}

  :main game.core

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler
                        {:optimizations :none
                         :output-to "resources/public/js/dev.js"
                         :output-dir "resources/public/js/cljs-dev/"
                         :pretty-print true
                         :source-map true}}]}

  :plugins [[lein-cljsbuild "1.1.8"]
            [lein-figwheel "0.5.20"]]

  :figwheel {:css-dirs ["resources/public/css"]}

  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.764"]
                 [reagent "1.0.0-rc1"]])
