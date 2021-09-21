package com.bhushxxx.shareify;


import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.ViewAnimationUtils;
import android.view.ViewTreeObserver;
import android.view.animation.AccelerateInterpolator;
import androidx.appcompat.app.AppCompatActivity;



public class CircularRevealAnimation extends AppCompatActivity {
    public static CircularRevealAnimation circularRevealAnimation;
    public CircularRevealAnimation() {
        circularRevealAnimation = this;
    }
    public void activity_opening_animation(final Bundle savedInstanceState, final View view, final int revealX, final int revealY) {
        if (savedInstanceState == null && Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            view.setVisibility(View.INVISIBLE);
            ViewTreeObserver viewTreeObserver = view.getViewTreeObserver();
            if (viewTreeObserver.isAlive()) {
                viewTreeObserver.addOnGlobalLayoutListener(new ViewTreeObserver.OnGlobalLayoutListener() {
                    @Override
                    public void onGlobalLayout() {
                        revealActivity(revealX, revealY,view);
                       view.getViewTreeObserver().removeOnGlobalLayoutListener(this);
                    }
                });
            }
        } else {
            view.setVisibility(View.VISIBLE);
        }


    }


    public void revealActivity(int x, int y, View view) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            float finalRadius = (float) (Math.max(view.getWidth(), view.getHeight()) * 1.1);

            // create the animator for this view (the start radius is zero)
            Animator circularReveal = ViewAnimationUtils.createCircularReveal(view, x, y, 0, finalRadius);
            circularReveal.setDuration(400);
            circularReveal.setInterpolator(new AccelerateInterpolator());

            // make the view visible and start the animation
            view.setVisibility(View.VISIBLE);
            circularReveal.start();
        } else {
            finish();
        }
    }



    public void unRevealActivity(final View view, int revealX, int revealY) {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.LOLLIPOP) {
            finish();
        } else {
            float finalRadius = (float) (Math.max(view.getWidth(), view.getHeight()) * 1.1);
            Animator circularReveal = ViewAnimationUtils.createCircularReveal(
                    view, revealX, revealY, finalRadius, 0);

            circularReveal.setDuration(400);
            circularReveal.addListener(new AnimatorListenerAdapter() {
                @Override
                public void onAnimationEnd(Animator animation) {
                    view.setVisibility(View.INVISIBLE);
                    finish();
                }
            });


            circularReveal.start();
        }
    }

    public void closingAnimation(final View view) {
        int cx,cy;
        cx = (int) (view.getRight()  / 2);
        cy = (int) (view.getTop());
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


