(ns game.core)

(defn hello []
  #?(:clj (println js/React)))

(hello)