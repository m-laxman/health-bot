temp.bmif = user.weight / ((user.height/100)*(user.height/100))
temp.bmif = temp.bmif.toFixed(2)
temp.bmrf = 655.1 + (9.563 * user.weight) + (1.85 * user.height) - (4.676 * user.age)
temp.bmrf = temp.bmrf.toFixed(2)