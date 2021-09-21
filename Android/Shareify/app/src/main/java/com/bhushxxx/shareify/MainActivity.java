package com.bhushxxx.shareify;


import android.graphics.Color;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.Toast;


import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.graphics.drawable.DrawerArrowDrawable;
import androidx.appcompat.widget.Toolbar;
import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;


import com.bhushxxx.shareify.FABanimation.TabBarView;
import com.bhushxxx.shareify.duonavigationdrawer.views.DuoDrawerLayout;
import com.bhushxxx.shareify.duonavigationdrawer.widgets.DuoDrawerToggle;
import com.bhushxxx.shareify.foldingcell.FoldingCell;



import java.util.ArrayList;
import java.util.Objects;

/**
 * Example of using Folding Cell with ListView and ListAdapter
 */
public class MainActivity extends AppCompatActivity {

    private DrawerLayout drawerLayout;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);



        // get our list view
        ListView theListView = findViewById(R.id.mainListView);

        // prepare elements to display
        final ArrayList<Item> items = Item.getTestingList();

        // add custom btn handler to first list item
        items.get(0).setRequestBtnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(getApplicationContext(), "CUSTOM HANDLER FOR FIRST BUTTON", Toast.LENGTH_SHORT).show();
            }
        });

        // create custom adapter that holds elements and their state (we need hold a id's of unfolded elements for reusable elements)
        final FoldingCellListAdapter adapter = new FoldingCellListAdapter(this, items);

        // add default btn handler for each request btn on each item if custom handler not found
        adapter.setDefaultRequestBtnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(getApplicationContext(), "DEFAULT HANDLER FOR ALL BUTTONS", Toast.LENGTH_SHORT).show();
            }
        });

        // set elements to adapter
        theListView.setAdapter(adapter);

        // set on click event listener to list view
        theListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int pos, long l) {
                // toggle clicked cell state
                ((FoldingCell) view).toggle(false);
                // register in adapter that state for selected cell is toggled
                adapter.registerToggle(pos);
            }
        });

        //TabBarView
        TabBarView tabBarView = findViewById(R.id.tabBarView);
        tabBarView.setMainBitmap(R.drawable.circle);
        tabBarView.bindBtnsForPage(0, R.drawable.coupon);
        tabBarView.bindBtnsForPage(1, R.drawable.coupon);
        tabBarView.bindBtnsForPage(2, R.drawable.coupon);
        tabBarView.bindBtnsForPage(3, R.drawable.coupon);
        tabBarView.initializePage(0);
        tabBarView.setOnTabBarClickListener(onTabBarClickListener);


        //DuoDrawer
 /*       DuoDrawerLayout drawerLayout = findViewById(R.id.drawer);
        Toolbar toolbar = findViewById(R.id.toolbar);
        DuoDrawerToggle drawerToggle = new DuoDrawerToggle(this, drawerLayout, toolbar,
                R.string.navigation_drawer_open,
                R.string.navigation_drawer_close);

        drawerLayout.setDrawerListener(drawerToggle);
        drawerToggle.syncState();
*/





    }


    TabBarView.OnTabBarClickListener onTabBarClickListener = new TabBarView.OnTabBarClickListener() {
        @Override
        public void onMainBtnsClick(int position, int[] clickLocation) {
            Toast.makeText(getApplicationContext(), "1"+position+"", Toast.LENGTH_LONG).show();
        }
        @Override
        public void onMainBtnsClick(int position) {
        }

        @Override
        public void onLeftBtnClick(int page) {

        }

        @Override
        public void onRightBtnClick(int page) {

        }


    };




}


