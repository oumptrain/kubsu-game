(ns game.core
  (:require [reagent.dom :as rdom]))

(defn app []
  [:div {:class "welcome"}
   [:h1 "Hello, World!"]
   [:p "Some text here..."]])

(rdom/render [app] (js/document.getElementById "app"))