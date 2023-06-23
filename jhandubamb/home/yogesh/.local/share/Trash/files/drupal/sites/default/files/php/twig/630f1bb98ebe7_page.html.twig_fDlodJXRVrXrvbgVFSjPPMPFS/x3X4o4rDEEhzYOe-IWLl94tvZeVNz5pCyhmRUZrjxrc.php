<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/contrib/mobileapp_zymphonies_theme/templates/layout/page.html.twig */
class __TwigTemplate_bd0c728b70026e6702ac32348b015334ec0383b7784c52a49ed01d80da56e5c7 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 60
        echo "
<div class=\"header\">
  
  <div class=\"container header-wrap\">
    <div class=\"row\">

      <!-- Start: Header -->

      <div class=\"navbar-header col-md-2\">
        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#main-navigation\">
          <i class=\"fas fa-bars\"></i>
        </button>
        ";
        // line 72
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 72)) {
            // line 73
            echo "          ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 73), 73, $this->source), "html", null, true);
            echo "
        ";
        }
        // line 75
        echo "      </div>

      <!-- End: Header -->

      ";
        // line 79
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "primary_menu", [], "any", false, false, true, 79)) {
            // line 80
            echo "        <div class=\"col-md-7\">
          <div class=\"main-menu\">
            ";
            // line 82
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "primary_menu", [], "any", false, false, true, 82), 82, $this->source), "html", null, true);
            echo "
          </div>
        </div>
      ";
        }
        // line 86
        echo "
      ";
        // line 87
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "top_menu", [], "any", false, false, true, 87)) {
            // line 88
            echo "        ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "top_menu", [], "any", false, false, true, 88), 88, $this->source), "html", null, true);
            echo "
      ";
        }
        // line 90
        echo "
    </div>
  </div>

  ";
        // line 94
        if (($context["is_front"] ?? null)) {
            // line 95
            echo "    <div class=\"hero-banner\">
      <ul class=\"slides\">
        ";
            // line 97
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["slider_content"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["slider_contents"]) {
                // line 98
                echo "          ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed($context["slider_contents"], 98, $this->source));
                echo "
        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['slider_contents'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 100
            echo "      </ul>
    </div>
  ";
        }
        // line 103
        echo "
</div>



";
        // line 108
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "welcome_message", [], "any", false, false, true, 108)) {
            // line 109
            echo "  <div class=\"welcome-message\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "welcome_message", [], "any", false, false, true, 109), 109, $this->source), "html", null, true);
            echo "</div>
";
        }
        // line 111
        echo "

<!-- Start: Top widget -->

";
        // line 115
        if (((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_first", [], "any", false, false, true, 115) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_second", [], "any", false, false, true, 115)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_third", [], "any", false, false, true, 115))) {
            // line 116
            echo "  <div class=\"topwidget\" id=\"topwidget\">

    <div class=\"container\">
        <div class=\"row clearfix\">

          <!-- Start: Top widget first -->          
          ";
            // line 122
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_first", [], "any", false, false, true, 122)) {
                // line 123
                echo "            <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["topwidget_class"] ?? null), 123, $this->source), "html", null, true);
                echo ">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_first", [], "any", false, false, true, 123), 123, $this->source), "html", null, true);
                echo "</div>
          ";
            }
            // line 124
            echo "          
          <!-- End: Top widget first --> 

          <!-- Start: Top widget second -->          
          ";
            // line 128
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_second", [], "any", false, false, true, 128)) {
                // line 129
                echo "            <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["topwidget_class"] ?? null), 129, $this->source), "html", null, true);
                echo ">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_second", [], "any", false, false, true, 129), 129, $this->source), "html", null, true);
                echo "</div>
          ";
            }
            // line 130
            echo "          
          <!-- End: Top widget second --> 
          
          <!-- Start: Top widget third -->         
          ";
            // line 134
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_third", [], "any", false, false, true, 134)) {
                // line 135
                echo "            <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["topwidget_class"] ?? null), 135, $this->source), "html", null, true);
                echo ">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_third", [], "any", false, false, true, 135), 135, $this->source), "html", null, true);
                echo "</div>
          ";
            }
            // line 136
            echo "          
          <!-- End: Top widget third -->

        </div>
    </div>
  </div>
";
        }
        // line 143
        echo "
<!--End: Top widget -->

    
<!--Start: Highlighted -->

";
        // line 149
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "highlighted", [], "any", false, false, true, 149)) {
            // line 150
            echo "  <div class=\"highlighted\">
    <div class=\"container\">
      ";
            // line 152
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "highlighted", [], "any", false, false, true, 152), 152, $this->source), "html", null, true);
            echo "
    </div>
  </div>
";
        }
        // line 156
        echo "
<!--End: Highlighted -->

<!--Start: Title -->

";
        // line 161
        if ((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "page_title", [], "any", false, false, true, 161) &&  !($context["is_front"] ?? null))) {
            // line 162
            echo "  <div id=\"page-title\">
    <div id=\"page-title-inner\">
      <div class=\"container\">
        ";
            // line 165
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "page_title", [], "any", false, false, true, 165), 165, $this->source), "html", null, true);
            echo "
      </div>
    </div>
  </div>
";
        }
        // line 170
        echo "
<!--End: Title -->

<div class=\"main-content\">
  <div class=\"container\">
    <div class=\"\">

      <!--Start: Breadcrumb -->

      ";
        // line 179
        if ( !($context["is_front"] ?? null)) {
            // line 180
            echo "        <div class=\"row\">
          <div class=\"col-md-12\">";
            // line 181
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "breadcrumb", [], "any", false, false, true, 181), 181, $this->source), "html", null, true);
            echo "</div>
        </div>
      ";
        }
        // line 184
        echo "
      <!--End: Breadcrumb -->

      <div class=\"row layout\">

        <!--- Start: Left SideBar -->
        ";
        // line 190
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 190)) {
            // line 191
            echo "          <div class=";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["sidebarfirst"] ?? null), 191, $this->source), "html", null, true);
            echo ">
            <div class=\"sidebar\">
              ";
            // line 193
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 193), 193, $this->source), "html", null, true);
            echo "
            </div>
          </div>
        ";
        }
        // line 197
        echo "        <!-- End Left SideBar -->

        <!--- Start Content -->
        ";
        // line 200
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 200)) {
            // line 201
            echo "          <div class=";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["contentlayout"] ?? null), 201, $this->source), "html", null, true);
            echo ">
            <div class=\"content_layout\">
              ";
            // line 203
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 203), 203, $this->source), "html", null, true);
            echo "
            </div>              
          </div>
        ";
        }
        // line 207
        echo "        <!-- End: Content -->

        <!-- Start: Right SideBar -->
        ";
        // line 210
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 210)) {
            // line 211
            echo "          <div class=";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["sidebarsecond"] ?? null), 211, $this->source), "html", null, true);
            echo ">
            <div class=\"sidebar\">
              ";
            // line 213
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 213), 213, $this->source), "html", null, true);
            echo "
            </div>
          </div>
        ";
        }
        // line 217
        echo "        <!-- End: Right SideBar -->
        
      </div>
    
    </div>
  </div>
</div>

<!-- End: Main content -->


<!-- Start: Services widget -->

";
        // line 230
        if (((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "services_first", [], "any", false, false, true, 230) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "services_second", [], "any", false, false, true, 230)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "services_third", [], "any", false, false, true, 230))) {
            // line 231
            echo "  <div class=\"services\" id=\"services\">
    <div class=\"container\">
        <div class=\"row clearfix\">

          <!-- Start: Services widget first -->          
          ";
            // line 236
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "services_first", [], "any", false, false, true, 236)) {
                // line 237
                echo "            <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["services_first_class"] ?? null), 237, $this->source), "html", null, true);
                echo ">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "services_first", [], "any", false, false, true, 237), 237, $this->source), "html", null, true);
                echo "</div>
          ";
            }
            // line 238
            echo "          
          <!-- End: Services widget first --> 

          <!-- Start: Services widget second -->          
          ";
            // line 242
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "services_second", [], "any", false, false, true, 242)) {
                // line 243
                echo "            <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["services_class"] ?? null), 243, $this->source), "html", null, true);
                echo ">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "services_second", [], "any", false, false, true, 243), 243, $this->source), "html", null, true);
                echo "</div>
          ";
            }
            // line 244
            echo "          
          <!-- End: Services widget second --> 
          
          <!-- Start: Services widget third -->         
          ";
            // line 248
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "services_third", [], "any", false, false, true, 248)) {
                // line 249
                echo "            <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["services_class"] ?? null), 249, $this->source), "html", null, true);
                echo ">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "services_third", [], "any", false, false, true, 249), 249, $this->source), "html", null, true);
                echo "</div>
          ";
            }
            // line 250
            echo "          
          <!-- End: Services widget third -->

        </div>
    </div>
  </div>
";
        }
        // line 257
        echo "
<!--End: Services widget -->


<!-- Start: Features -->

";
        // line 263
        if (((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "features_first", [], "any", false, false, true, 263) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "features_second", [], "any", false, false, true, 263)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "features_third", [], "any", false, false, true, 263))) {
            // line 264
            echo "
  <div class=\"features\">
    <div class=\"container\">
      <div class=\"row\">

        <!-- Start: Features First -->
        ";
            // line 270
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "features_first", [], "any", false, false, true, 270)) {
                // line 271
                echo "          <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["features_first_class"] ?? null), 271, $this->source), "html", null, true);
                echo ">
            ";
                // line 272
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "features_first", [], "any", false, false, true, 272), 272, $this->source), "html", null, true);
                echo "
          </div>
        ";
            }
            // line 275
            echo "        <!-- End: Features First -->

        <!-- Start :Features Second -->
        ";
            // line 278
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "features_second", [], "any", false, false, true, 278)) {
                // line 279
                echo "          <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["features_class"] ?? null), 279, $this->source), "html", null, true);
                echo ">
            ";
                // line 280
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "features_second", [], "any", false, false, true, 280), 280, $this->source), "html", null, true);
                echo "
          </div>
        ";
            }
            // line 283
            echo "        <!-- End: Features Second -->

        <!-- Start: Features third -->
        ";
            // line 286
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "features_third", [], "any", false, false, true, 286)) {
                // line 287
                echo "          <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["features_class"] ?? null), 287, $this->source), "html", null, true);
                echo ">
            ";
                // line 288
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "features_third", [], "any", false, false, true, 288), 288, $this->source), "html", null, true);
                echo "
          </div>
        ";
            }
            // line 291
            echo "        <!-- End: Features Third -->

      </div>
    </div>
  </div>

";
        }
        // line 298
        echo "
<!--End: Features -->


<!-- Start: Screenshot widgets -->

";
        // line 304
        if ((((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "screenshot_first", [], "any", false, false, true, 304) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "screenshot_second", [], "any", false, false, true, 304)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "screenshot_third", [], "any", false, false, true, 304)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "screenshot_forth", [], "any", false, false, true, 304))) {
            // line 305
            echo "
  <div class=\"screenshot\" id=\"screenshot\">    
    <div class=\"container\">
      <div class=\"row\">

        <!-- Start: Team First -->          
        ";
            // line 311
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "screenshot_first", [], "any", false, false, true, 311)) {
                // line 312
                echo "          <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["screenshot_class"] ?? null), 312, $this->source), "html", null, true);
                echo ">
            ";
                // line 313
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "screenshot_first", [], "any", false, false, true, 313), 313, $this->source), "html", null, true);
                echo "
          </div>
        ";
            }
            // line 315
            echo "          
        <!-- End: Team First -->

        <!-- Start: Team Second -->
        ";
            // line 319
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "screenshot_second", [], "any", false, false, true, 319)) {
                // line 320
                echo "          <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["screenshot_class"] ?? null), 320, $this->source), "html", null, true);
                echo ">
            ";
                // line 321
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "screenshot_second", [], "any", false, false, true, 321), 321, $this->source), "html", null, true);
                echo "
          </div>
        ";
            }
            // line 323
            echo "          
        <!-- End: Team Second -->

        <!-- Start: Team third -->          
        ";
            // line 327
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "screenshot_third", [], "any", false, false, true, 327)) {
                // line 328
                echo "          <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["screenshot_class"] ?? null), 328, $this->source), "html", null, true);
                echo ">
            ";
                // line 329
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "screenshot_third", [], "any", false, false, true, 329), 329, $this->source), "html", null, true);
                echo "
          </div>
        ";
            }
            // line 331
            echo "          
        <!-- End: Team Third -->

        <!-- Start: Team Forth -->
        ";
            // line 335
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "screenshot_forth", [], "any", false, false, true, 335)) {
                // line 336
                echo "          <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["screenshot_class"] ?? null), 336, $this->source), "html", null, true);
                echo ">
            ";
                // line 337
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "screenshot_forth", [], "any", false, false, true, 337), 337, $this->source), "html", null, true);
                echo "
          </div>
        ";
            }
            // line 340
            echo "        <!-- End: Team Forth -->

      </div>
    </div>
  </div>

";
        }
        // line 347
        echo "
<!--End: Screenshot widgets -->


<!-- Start: Price table widgets -->

";
        // line 353
        if (((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "pricetable_first", [], "any", false, false, true, 353) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "pricetable_second", [], "any", false, false, true, 353)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "pricetable_third", [], "any", false, false, true, 353))) {
            // line 354
            echo "
  <div class=\"price-table\" id=\"price-table\">    
    <div class=\"container\">
      <div class=\"row\">

        <!-- Start: Price table First -->          
        ";
            // line 360
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "pricetable_first", [], "any", false, false, true, 360)) {
                // line 361
                echo "          <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["pricetable_class"] ?? null), 361, $this->source), "html", null, true);
                echo ">
            ";
                // line 362
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "pricetable_first", [], "any", false, false, true, 362), 362, $this->source), "html", null, true);
                echo "
          </div>
        ";
            }
            // line 364
            echo "          
        <!-- End: Price table First -->

        <!-- Start: Price table Second -->
        ";
            // line 368
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "pricetable_second", [], "any", false, false, true, 368)) {
                // line 369
                echo "          <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["pricetable_class"] ?? null), 369, $this->source), "html", null, true);
                echo ">
            ";
                // line 370
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "pricetable_second", [], "any", false, false, true, 370), 370, $this->source), "html", null, true);
                echo "
          </div>
        ";
            }
            // line 372
            echo "          
        <!-- End: Price table Second -->

        <!-- Start: Price table third -->          
        ";
            // line 376
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "pricetable_third", [], "any", false, false, true, 376)) {
                // line 377
                echo "          <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["pricetable_class"] ?? null), 377, $this->source), "html", null, true);
                echo ">
            ";
                // line 378
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "pricetable_third", [], "any", false, false, true, 378), 378, $this->source), "html", null, true);
                echo "
          </div>
        ";
            }
            // line 380
            echo "          
        <!-- End: Price table Third -->

        <!-- Start: Price table third -->          
        ";
            // line 384
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "pricetable_forth", [], "any", false, false, true, 384)) {
                // line 385
                echo "          <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["pricetable_class"] ?? null), 385, $this->source), "html", null, true);
                echo ">
            ";
                // line 386
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "pricetable_forth", [], "any", false, false, true, 386), 386, $this->source), "html", null, true);
                echo "
          </div>
        ";
            }
            // line 388
            echo "          
        <!-- End: Price table third -->

      </div>
    </div>
  </div>

";
        }
        // line 396
        echo "
<!--End: Price table widgets -->


<!-- Start: Bottom widgets -->

";
        // line 402
        if ((((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_first", [], "any", false, false, true, 402) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_second", [], "any", false, false, true, 402)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_third", [], "any", false, false, true, 402)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_forth", [], "any", false, false, true, 402))) {
            // line 403
            echo "
  <div class=\"bottom-widget\" id=\"bottom-widget\">    
    <div class=\"container\">
      <div class=\"row\">

        <!-- Start: Bottom First -->          
        ";
            // line 409
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_first", [], "any", false, false, true, 409)) {
                // line 410
                echo "          <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["bottom_class"] ?? null), 410, $this->source), "html", null, true);
                echo ">
            ";
                // line 411
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_first", [], "any", false, false, true, 411), 411, $this->source), "html", null, true);
                echo "
          </div>
        ";
            }
            // line 413
            echo "          
        <!-- End: Bottom First -->

        <!-- Start: Bottom Second -->
        ";
            // line 417
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_second", [], "any", false, false, true, 417)) {
                // line 418
                echo "          <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["bottom_class"] ?? null), 418, $this->source), "html", null, true);
                echo ">
            ";
                // line 419
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_second", [], "any", false, false, true, 419), 419, $this->source), "html", null, true);
                echo "
          </div>
        ";
            }
            // line 421
            echo "          
        <!-- End: Bottom Second -->

        <!-- Start: Bottom third -->          
        ";
            // line 425
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_third", [], "any", false, false, true, 425)) {
                // line 426
                echo "          <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["bottom_class"] ?? null), 426, $this->source), "html", null, true);
                echo ">
            ";
                // line 427
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_third", [], "any", false, false, true, 427), 427, $this->source), "html", null, true);
                echo "
          </div>
        ";
            }
            // line 429
            echo "          
        <!-- End: Bottom Third -->

        <!-- Start: Bottom Forth -->
        ";
            // line 433
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_forth", [], "any", false, false, true, 433)) {
                // line 434
                echo "          <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["bottom_class"] ?? null), 434, $this->source), "html", null, true);
                echo ">
            ";
                // line 435
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_forth", [], "any", false, false, true, 435), 435, $this->source), "html", null, true);
                echo "
          </div>
        ";
            }
            // line 438
            echo "        <!-- End: Bottom Forth -->

      </div>
    </div>
  </div>

";
        }
        // line 445
        echo "
<!--End: Bottom widgets -->


<!-- Start: Footer widgets -->

";
        // line 451
        if (((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_first", [], "any", false, false, true, 451) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_second", [], "any", false, false, true, 451)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_third", [], "any", false, false, true, 451))) {
            // line 452
            echo "
  <div class=\"footer\" id=\"footer\">
    <div class=\"container\">
      <div class=\"parallax-region wow- bounceInUp\">  
        <div class=\"row\">

          <!-- Start: Footer First -->
          ";
            // line 459
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_first", [], "any", false, false, true, 459)) {
                // line 460
                echo "            <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer_class"] ?? null), 460, $this->source), "html", null, true);
                echo ">
              ";
                // line 461
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_first", [], "any", false, false, true, 461), 461, $this->source), "html", null, true);
                echo "
            </div>
          ";
            }
            // line 464
            echo "          <!-- End: Footer First -->

          <!-- Start :Footer Second -->
          ";
            // line 467
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_second", [], "any", false, false, true, 467)) {
                // line 468
                echo "            <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer_class"] ?? null), 468, $this->source), "html", null, true);
                echo ">
              ";
                // line 469
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_second", [], "any", false, false, true, 469), 469, $this->source), "html", null, true);
                echo "
            </div>
          ";
            }
            // line 472
            echo "          <!-- End: Footer Second -->

          <!-- Start: Footer third -->
          ";
            // line 475
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_third", [], "any", false, false, true, 475)) {
                // line 476
                echo "            <div class = ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer_last_class"] ?? null), 476, $this->source), "html", null, true);
                echo ">
              ";
                // line 477
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_third", [], "any", false, false, true, 477), 477, $this->source), "html", null, true);
                echo "
            </div>
          ";
            }
            // line 480
            echo "          <!-- End: Footer Third -->

        </div>
      </div>
    </div>
  </div>

";
        }
        // line 488
        echo "
<!--End: Footer widgets -->


<!-- Start: Copyright -->

<div class=\"copyright\">

  <div class=\"container\">

    <div class=\"row\">
      
      ";
        // line 500
        if (($context["show_social_icon"] ?? null)) {
            // line 501
            echo "        <div class=\"col-md-6\">
          <p>Copyright © ";
            // line 502
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, twig_date_format_filter($this->env, "now", "Y"), "html", null, true);
            echo ". All rights reserved.</p>
          <p class=\"social-media\">
            ";
            // line 504
            if (($context["facebook_url"] ?? null)) {
                // line 505
                echo "              <a href=\"";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["facebook_url"] ?? null), 505, $this->source), "html", null, true);
                echo "\"  class=\"facebook\" target=\"_blank\" ><i class=\"fab fa-facebook-f\"></i></a>
            ";
            }
            // line 507
            echo "            ";
            if (($context["google_plus_url"] ?? null)) {
                // line 508
                echo "              <a href=\"";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["google_plus_url"] ?? null), 508, $this->source), "html", null, true);
                echo "\"  class=\"google-plus\" target=\"_blank\" ><i class=\"fab fa-google-plus-g\"></i></a>
            ";
            }
            // line 510
            echo "            ";
            if (($context["twitter_url"] ?? null)) {
                // line 511
                echo "              <a href=\"";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["twitter_url"] ?? null), 511, $this->source), "html", null, true);
                echo "\" class=\"twitter\" target=\"_blank\" ><i class=\"fab fa-twitter\"></i></a>
            ";
            }
            // line 513
            echo "            ";
            if (($context["linkedin_url"] ?? null)) {
                // line 514
                echo "              <a href=\"";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["linkedin_url"] ?? null), 514, $this->source), "html", null, true);
                echo "\" class=\"linkedin\" target=\"_blank\"><i class=\"fab fa-linkedin-in\"></i></a>
            ";
            }
            // line 516
            echo "            ";
            if (($context["pinterest_url"] ?? null)) {
                // line 517
                echo "              <a href=\"";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["pinterest_url"] ?? null), 517, $this->source), "html", null, true);
                echo "\" class=\"pinterest\" target=\"_blank\" ><i class=\"fab fa-pinterest-p\"></i></a>
            ";
            }
            // line 519
            echo "            ";
            if (($context["rss_url"] ?? null)) {
                // line 520
                echo "              <a href=\"";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rss_url"] ?? null), 520, $this->source), "html", null, true);
                echo "\" class=\"rss\" target=\"_blank\" ><i class=\"fa fa-rss\"></i></a>
            ";
            }
            // line 522
            echo "          </p>
        </div>
      ";
        }
        // line 525
        echo "
      ";
        // line 526
        if (($context["show_credit_link"] ?? null)) {
            // line 527
            echo "        <div class=\"col-md-6\">
          <p class=\"credit-link\">Designed By <a href=\"http://www.zymphonies.com\" target=\"_blank\">Zymphonies</a></p>
        </div>
      ";
        }
        // line 531
        echo "
    </div>

  </div>

</div>

<!-- End: Copyright -->





";
    }

    public function getTemplateName()
    {
        return "themes/contrib/mobileapp_zymphonies_theme/templates/layout/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  945 => 531,  939 => 527,  937 => 526,  934 => 525,  929 => 522,  923 => 520,  920 => 519,  914 => 517,  911 => 516,  905 => 514,  902 => 513,  896 => 511,  893 => 510,  887 => 508,  884 => 507,  878 => 505,  876 => 504,  871 => 502,  868 => 501,  866 => 500,  852 => 488,  842 => 480,  836 => 477,  831 => 476,  829 => 475,  824 => 472,  818 => 469,  813 => 468,  811 => 467,  806 => 464,  800 => 461,  795 => 460,  793 => 459,  784 => 452,  782 => 451,  774 => 445,  765 => 438,  759 => 435,  754 => 434,  752 => 433,  746 => 429,  740 => 427,  735 => 426,  733 => 425,  727 => 421,  721 => 419,  716 => 418,  714 => 417,  708 => 413,  702 => 411,  697 => 410,  695 => 409,  687 => 403,  685 => 402,  677 => 396,  667 => 388,  661 => 386,  656 => 385,  654 => 384,  648 => 380,  642 => 378,  637 => 377,  635 => 376,  629 => 372,  623 => 370,  618 => 369,  616 => 368,  610 => 364,  604 => 362,  599 => 361,  597 => 360,  589 => 354,  587 => 353,  579 => 347,  570 => 340,  564 => 337,  559 => 336,  557 => 335,  551 => 331,  545 => 329,  540 => 328,  538 => 327,  532 => 323,  526 => 321,  521 => 320,  519 => 319,  513 => 315,  507 => 313,  502 => 312,  500 => 311,  492 => 305,  490 => 304,  482 => 298,  473 => 291,  467 => 288,  462 => 287,  460 => 286,  455 => 283,  449 => 280,  444 => 279,  442 => 278,  437 => 275,  431 => 272,  426 => 271,  424 => 270,  416 => 264,  414 => 263,  406 => 257,  397 => 250,  389 => 249,  387 => 248,  381 => 244,  373 => 243,  371 => 242,  365 => 238,  357 => 237,  355 => 236,  348 => 231,  346 => 230,  331 => 217,  324 => 213,  318 => 211,  316 => 210,  311 => 207,  304 => 203,  298 => 201,  296 => 200,  291 => 197,  284 => 193,  278 => 191,  276 => 190,  268 => 184,  262 => 181,  259 => 180,  257 => 179,  246 => 170,  238 => 165,  233 => 162,  231 => 161,  224 => 156,  217 => 152,  213 => 150,  211 => 149,  203 => 143,  194 => 136,  186 => 135,  184 => 134,  178 => 130,  170 => 129,  168 => 128,  162 => 124,  154 => 123,  152 => 122,  144 => 116,  142 => 115,  136 => 111,  130 => 109,  128 => 108,  121 => 103,  116 => 100,  107 => 98,  103 => 97,  99 => 95,  97 => 94,  91 => 90,  85 => 88,  83 => 87,  80 => 86,  73 => 82,  69 => 80,  67 => 79,  61 => 75,  55 => 73,  53 => 72,  39 => 60,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/contrib/mobileapp_zymphonies_theme/templates/layout/page.html.twig", "/var/www/html/drupal/themes/contrib/mobileapp_zymphonies_theme/templates/layout/page.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 72, "for" => 97);
        static $filters = array("escape" => 73, "raw" => 98, "date" => 502);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if', 'for'],
                ['escape', 'raw', 'date'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
