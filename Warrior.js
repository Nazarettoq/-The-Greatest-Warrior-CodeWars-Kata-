class Warrior{
  constructor(){
    this.HeroExp=100
    this.HeroLvl=Math.floor(this.HeroExp/100)
    this.Ranks=["Pushover", "Novice", "Fighter", 
                "Warrior", "Veteran", "Sage", "Elite", 
                "Conqueror", "Champion", "Master", "Greatest"]
    this.allAchievements=[]
    this.maxHeroExp=10000
    this.maxHeroLvl=100
  
  }
  defineRank(lvl){
    if(lvl<10) return this.Ranks[0]
    return this.Ranks[Math.floor(lvl/10)]
  }
  level(){
    const currLvl=Math.floor(this.HeroExp/100)   
    if(currLvl>=this.maxHeroLvl){
      this.HeroLvl=this.maxHeroLvl
      return this.maxHeroLvl
    }
    return this.HeroLvl=currLvl
  }
  rank(){
    this.level()
    return this.defineRank(this.HeroLvl)
  }
  achievements(){
    return this.allAchievements
  }
  training(args){
    this.level()
    const [info,exp,minLvl]=args
    if(this.HeroLvl>=minLvl){
      this.allAchievements.push(info)
      this.HeroExp+=exp 
      return info
    }else{
      return "Not strong enough"
    }
  }
     battle(enemyLvl){
      this.level()
       if(enemyLvl>100 || enemyLvl<=0) return "Invalid level" 
        const responses=["Easy fight", "A good fight", "An intense fight","You've been defeated"]
       if(this.HeroLvl==enemyLvl){
           this.HeroExp+=10
           return responses[1]
        }
      else if( this.HeroLvl-1==enemyLvl){
                   this.HeroExp+=5
              return responses[1]
                }
      else if( this.HeroLvl-2>=enemyLvl){
              return responses[0] 
            }
      else if( this.HeroLvl<=enemyLvl-5 && this.defineRank(this.HeroLvl)!=this.defineRank(enemyLvl)){
              return responses[3] 
            }
            else{
                 const diff =this.HeroLvl-enemyLvl
               this.HeroExp+=20 * diff * diff
               return responses[2]
            }
      }
  experience(){
  if(this.HeroExp>=this.maxHeroExp) return this.maxHeroExp
   return this.HeroExp
  }
}