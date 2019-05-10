import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * A background with a path drawn on it. Two different backgrounds are available.
 * 
 * @author Michael Kölling
 * @version 1.0
 */
public class MyWorld1  extends World
{
    public static final int TIME = 60;
    
    private static Timer  levelTime = new Timer(TIME); // current level timer

    /**
     * Create the field.
     */
    public MyWorld1()
    {    
        // Create a new world with 20x20 cells with a cell size of 10x10 pixels.
        super(1000, 1140, 1);
        prepare();
        
    }

      

    /**
     * Prepare the world for the start of the program.
     * That is: create the initial objects and add them to the world.
     */
    private void prepare()
    {

        MyHero mh = new MyHero();
        addObject( mh, 160, 50);
        Goal goal = new Goal();
        addObject(goal,810, 200); //810, 200
        addObject(mh.getCurrentTime(),850,50); // general game timer
        addObject(levelTime,850,50);
        addObject(new  ScoreBoard("The Starter Maze", true), getWidth()/2, 30);
      
        
    }
    
    /**
     * reset current level Timer
     */
    public static void resetLevelTimer(){
    levelTime=new Timer(TIME);
    }
    
    /**
     * check if current level Timer is 0 (time out)
     */
    public static boolean checkTimeOut(){
    if(levelTime.getTime()==0)
        return true;
    return false;
    }
    
    /**
     * Calculates current level score according to the current level time. 
     */
    public static int calculateLevelScore(){
         int score =  levelTime.getTime()*5;  //*5 level bonus
         return -score;
    }
    
}
