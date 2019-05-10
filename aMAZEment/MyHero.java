import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)
import javax.swing.JOptionPane; 
/**
 * Write a description of class MyHero here.
 * 
 * @author (Penteridou Nikolina) 
 * @version (05/2019)
 */
public class MyHero extends Others
{
   
    private static final int SPEED = 3;
    private static final int RADIO = 13;
    private int speedX = SPEED;
    private int speedY = SPEED;
    private int level = 1;
    private Timer totalTime = new Timer(0, true, ""); //initialize total time
    
    
    
    
    public void act() 
    {
     handleKeyPresses();
     goalAccomplished();  
     checkCrash();
     checkforTimeOuts(level);     
    }   
    
    /**
     * Check whether the ball is crashing on the wall.
     */
    public void checkCrash()
    {
      if ( isPath(ballColor(RADIO,RADIO))||isPath(ballColor(RADIO,-RADIO))||isPath(ballColor(-RADIO,-RADIO))||isPath(ballColor(-RADIO,RADIO))||atWorldEdge())
        {
        
            World mw = (World) getWorld();
            gameOver(level, true);
            mw.addObject(new WallCrash(), getX(), getY());
            mw.removeObject(this);
            
        }
    
    
    }

    /**
     * Returns current Time  
     */
    
    public Timer getCurrentTime(){
        return totalTime;
    }
    
    /**
     * Test if we are close to one of the edges of the world. Return true if we are.
     */
    public boolean atWorldEdge()
    {
        if(getX() < 15 || getX() > getWorld().getWidth() - 2)
            return true;
        if(getY() < 15 || getY() > getWorld().getHeight() - 2)
            return true;
        else
            return false;
    }
    
    /**
    * Check if walking on the path (the path is white)
    */
   private boolean isPath (Color col)
    {
        return col.getRed() != 255;   // path colour is white (no red at all)
    }
    
    //check the background color of ball's location
     private Color ballColor(int x , int y)
    {
         return (getWorld().getBackground().getColorAt (this.getX()+x, this.getY()+y) );
    }
    
    /**
     * Moves handling
     */
     public void handleKeyPresses()
    {
        handleArrowKey("left", -SPEED, 0);
        handleArrowKey("right", SPEED, 0);
        handleArrowKey("up", 0, -SPEED);
        handleArrowKey("down", 0, SPEED);
    }
    
    /**
     * Arrow keys handling
     */
    private void handleArrowKey(String k, int sX, int sY) {
        if( Greenfoot.isKeyDown(k) ) {
            if ( Greenfoot.isKeyDown("left")|| Greenfoot.isKeyDown("down"))
            turn(-4);
        if ( Greenfoot.isKeyDown("right")|| Greenfoot.isKeyDown("up"))
            turn(4);
            speedX = sX;
            speedY = sY;
        }
        setLocation(getX()+speedX, getY()+speedY);
        speedX = 0;
        speedY = 0;
    }
    
    /**
     * Level up! To the next level.Creates next world(level).
     */
    
    public void levelUp(MyHero myH, int currentLevel){
        int lvl = currentLevel;
        switch (lvl){
          case 1 : 
            Greenfoot.setWorld(new MyWorld2(this, getCurrentTime())) ;
            level++;
            break;
          case 2 : 
            Greenfoot.setWorld(new MyWorld3(this, getCurrentTime())) ;
            level++;
            break;
          case 3 : 
            Greenfoot.setWorld(new MyWorld4(this, getCurrentTime())) ;
            level++;
            break;
          case 4 : 
            Greenfoot.setWorld(new MyWorld5(this, getCurrentTime())) ;
            level++;
            break;
          case 5 : 
            Greenfoot.setWorld(new MyWorld6(this, getCurrentTime())) ;
            level++;
            break;
          case 6 : 
            Greenfoot.setWorld(new MyWorld7(this, getCurrentTime())) ;
            level++;
            break;
          case 7 : 
            Greenfoot.setWorld(new MyWorld7(this, getCurrentTime())) ;
            level=0;
            gameOver(0, true);
            break;
          
        }
    }
    
    /**
     * check if goal is touched 
     */
     public void goalAccomplished()
    {
        if ( canSee(Goal.class) )
        {
            eat(Goal.class);
           getWorld().removeObject(this);
           levelUp(this, level);
 
        }
    }
    
    /**
     * check current level for timeout
     */
    
    public void checkforTimeOuts(int currentLevel){
   
    int lvl = currentLevel;
    switch (lvl){
          
        case 1:
            if(MyWorld1.checkTimeOut()){
                gameOver(lvl, false);
                getWorld().removeObject(this);
            }    
            break;
        case 2:
            if(MyWorld2.checkTimeOut()){
                gameOver(lvl, false);
                getWorld().removeObject(this);
            } 
            break;    
        case 3:
            if(MyWorld3.checkTimeOut()){
                gameOver(lvl, false);
                getWorld().removeObject(this);
            } 
            break;
        case 4:
            if(MyWorld4.checkTimeOut()){
                gameOver(lvl, false);
                getWorld().removeObject(this);
            } 
            break;
        case 5:
            if(MyWorld5.checkTimeOut()){
                gameOver(lvl, false);
                getWorld().removeObject(this);
            } 
            break;
        case 6:
            if(MyWorld6.checkTimeOut()){
                gameOver(lvl, false);
                getWorld().removeObject(this);
            } 
            break;
        case 7:
            if(MyWorld7.checkTimeOut()){
                gameOver(lvl, false);
                getWorld().removeObject(this);
            } 
            break;
    }
    
    
    
    }
    
    /**
     * The game over screen with the final score. Calculates score accordingly the currentlevel. Boolean indicates wheather gameover caused by crash or not(timeout).  
     */
    public void gameOver(int currentLevel, boolean crash) 
        {
        int lvl = currentLevel;
        int score ; 
        Button button = new Button ();
        
        
        switch (lvl){
          case 1 : 
            score = 0; 
            if (crash)
                getWorld().addObject(new ScoreBoard(score), getWorld().getWidth()/2, getWorld().getHeight()/2);
            else
                getWorld().addObject(new ScoreBoard(score, "timeout"), getWorld().getWidth()/2, getWorld().getHeight()/2);
                
            getWorld().addObject (button, 600, 660);
            MyWorld1.resetLevelTimer();
            break;
          case 2 : 
            score = MyWorld1.calculateLevelScore();
            if (crash)
                getWorld().addObject(new ScoreBoard(score), getWorld().getWidth()/2, getWorld().getHeight()/2);
            else
                getWorld().addObject(new ScoreBoard(score, "timeout"), getWorld().getWidth()/2, getWorld().getHeight()/2);
                
            getWorld().addObject (button, 600, 660);
            MyWorld2.resetLevelTimer();
            break;
          case 3 : 
            score = MyWorld1.calculateLevelScore()+MyWorld2.calculateLevelScore();
            if (crash)
                getWorld().addObject(new ScoreBoard(score), getWorld().getWidth()/2, getWorld().getHeight()/2);
            else
                getWorld().addObject(new ScoreBoard(score, "timeout"), getWorld().getWidth()/2, getWorld().getHeight()/2);
                
            getWorld().addObject (button, 600, 660);
            MyWorld3.resetLevelTimer();
            break;
          case 4 : 
            score = MyWorld1.calculateLevelScore()+MyWorld2.calculateLevelScore()+MyWorld3.calculateLevelScore();
            if (crash)
                getWorld().addObject(new ScoreBoard(score), getWorld().getWidth()/2, getWorld().getHeight()/2);
            else
                getWorld().addObject(new ScoreBoard(score, "timeout"), getWorld().getWidth()/2, getWorld().getHeight()/2);
                
            getWorld().addObject (button, 600, 660);
            MyWorld4.resetLevelTimer();
            break;
          case 5 : 
             score = MyWorld1.calculateLevelScore()+MyWorld2.calculateLevelScore()+MyWorld3.calculateLevelScore()+MyWorld4.calculateLevelScore();
            if (crash)
                getWorld().addObject(new ScoreBoard(score), getWorld().getWidth()/2, getWorld().getHeight()/2);
            else
                getWorld().addObject(new ScoreBoard(score, "timeout"), getWorld().getWidth()/2, getWorld().getHeight()/2);
                
            getWorld().addObject (button, 600, 660);
            MyWorld5.resetLevelTimer();
            break;
          case 6 : 
             score = MyWorld1.calculateLevelScore()+MyWorld2.calculateLevelScore()+MyWorld3.calculateLevelScore()+MyWorld4.calculateLevelScore()+MyWorld5.calculateLevelScore();
             if (crash)
                getWorld().addObject(new ScoreBoard(score), getWorld().getWidth()/2, getWorld().getHeight()/2);
            else
                getWorld().addObject(new ScoreBoard(score, "timeout"), getWorld().getWidth()/2, getWorld().getHeight()/2);
                
            getWorld().addObject (button, 600, 660);
            MyWorld6.resetLevelTimer();
            break;
          case 7 : 
             score = MyWorld1.calculateLevelScore()+MyWorld2.calculateLevelScore()+MyWorld3.calculateLevelScore()+MyWorld4.calculateLevelScore()+MyWorld5.calculateLevelScore()+MyWorld6.calculateLevelScore();
             if (crash)
                getWorld().addObject(new ScoreBoard(score), getWorld().getWidth()/2, getWorld().getHeight()/2);
            else
                getWorld().addObject(new ScoreBoard(score, "timeout"), getWorld().getWidth()/2, getWorld().getHeight()/2);
                
            getWorld().addObject (button, 600, 660);
            MyWorld6.resetLevelTimer();
            break;
          default:  //game last level finished - score calculation includes total time
            score = MyWorld1.calculateLevelScore()+MyWorld2.calculateLevelScore()+MyWorld3.calculateLevelScore()+MyWorld4.calculateLevelScore()+MyWorld5.calculateLevelScore()+MyWorld6.calculateLevelScore()+MyWorld7.calculateLevelScore();
            score  = score - getCurrentTime().getTime()/10;
            getWorld().addObject(new ScoreBoard(score, this), getWorld().getWidth()/2, getWorld().getHeight()/2);
            getWorld().addObject (button, 551, 747);
          break;
        }
        
        //Greenfoot.stop();
    }
    
    /**
     * check if you can see an object.
     */
    public boolean canSee(Class clss)
    {
        Actor actor = getOneObjectAtOffset(0, 0, clss);
        return actor != null;        
    }

    
    /**
     * Try to eat an object of class 'clss'. This is only successful if there
     * is such an object where we currently are. Otherwise this method does
     * nothing.
     */
    public void eat(Class clss)
    {
        Actor actor = getOneObjectAtOffset(0, 0, clss);
        if(actor != null) {
            getWorld().removeObject(actor);
        }
    }  
    
    
  
}
