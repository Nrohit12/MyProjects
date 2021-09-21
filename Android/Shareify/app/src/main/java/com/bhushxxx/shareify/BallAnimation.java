package com.bhushxxx.shareify;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.Toast;

public class BallAnimation extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_ball_animation);

        ImageView anim_ball = findViewById(R.id.anim_ball);

        int[] location = new int[2];
        anim_ball.getLocationOnScreen(location);

        int x = location[0];
        int y = location[1];
        Toast.makeText(this, x+ ""+ " " + y, Toast.LENGTH_LONG).show();
        System.out.println(x+ " " + y );




        Animation(anim_ball, x , y);













    }

    void  Animation(ImageView view, int x, int y){


        }



    }

