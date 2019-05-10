import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class MyWorld7 here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class MyWorld7 extends World
{
    public static final int TIME = 10;
    
    private static Timer  levelTime = new Timer(TIME); // current level timer
    /**
     * Constructor for objects of class MyWorld7.
     * 
     */
    public MyWorld7(MyHero mh, Timer t)
    {    
       super(1000, 1140, 1); 
        prepare(mh, t);
        //Timer levelTime = new Timer(); // current level timer
    }
    
    
    private void prepare(MyHero mh, Timer t)
    {
        Goal goal = new Goal();
        addObject(goal,928, 592); 
        addObject(mh,160, 50);
        addObject(t,850,50);    // general game timer
       addObject(levelTime,850,50);
       addObject(new  ScoreBoard("The Black Hole Maze", true), getWidth()/2, 30);
    }
    
    /**
     * reset current level Timer
     */
    public static void resetLevelTimer(){
    levelTime=new Timer(300);
    }
    
     public static int calculateLevelScore(){
         int score =  -levelTime.getTime()+700;
         return score;
    }
    
    /**
     * check if current level Timer is 0 (time out)
     */
     public static boolean checkTimeOut(){
    if(levelTime.getTime()==0)
        return true;
    return false;
    }
}
