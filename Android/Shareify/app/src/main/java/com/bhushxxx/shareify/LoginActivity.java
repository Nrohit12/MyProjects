package com.bhushxxx.shareify;

import androidx.appcompat.app.AppCompatActivity;

import android.animation.Animator;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.ViewAnimationUtils;
import android.widget.Button;
import android.widget.RelativeLayout;
import android.widget.Toast;


public class LoginActivity extends AppCompatActivity {
    CircularRevealAnimation circularRevealAnimation = new CircularRevealAnimation();
    RelativeLayout login_acitvity_layout;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.acitivity_login);
        login_acitvity_layout = findViewById(R.id.login_activity_layout);
        Intent intent = getIntent();
        int revealX =  intent.getIntExtra("revealX", 0);
        int revealY = intent.getIntExtra("revealY", 0);

        circularRevealAnimation.activity_opening_animation(savedInstanceState,login_acitvity_layout, revealX, revealY);

        Button getOtp=findViewById(R.id.getOtp);
        getOtp.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(getApplicationContext(), Main2Activity.class));
            }
        });

    }
    @Override

    public void onBackPressed() {
        closingAnimation(login_acitvity_layout);

    }

    private void closingAnimation(final View view) {
        int cx,cy;
        cx = view.getRight()/2;
        cy = view.getTop();
        float finalRadius = Math.max(view.getWidth(), view.getHeight());
        Animator circularReveal = ViewAnimationUtils.createCircularReveal(view, cx, cy, finalRadius, 0);
        circularReveal.addListener(new Animator.AnimatorListener() {
            @Override
            public void onAnimationStart(Animator animator) {

            }

            @Override
            public void onAnimationEnd(Animator animator) {
                view.setVisibility(View.INVISIBLE);
                finish();
            }

            @Override
            public void onAnimationCancel(Animator animator) {

            }

            @Override
            public void onAnimationRepeat(Animator animator) {

            }
        });
        circularReveal.setDuration(400);
        circularReveal.start();
    }
}