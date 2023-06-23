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

/* themes/custom/delicious/template/node/node--events.html.twig */
class __TwigTemplate_0505c9d0bf345fb0fda64ba3738c56daf944c73a47d2cc53a0004d9702e69ac4 extends \Twig\Template
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
        // line 1
        echo "<div class=\"event_section\">
    <div class=\"event_section_image\"> 
      ";
        // line 3
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field_image", [], "any", false, false, true, 3), 0, [], "any", false, false, true, 3), 3, $this->source), "html", null, true);
        echo "
    </div>
    <div class=\"event_discription\">
            <div class=\"event_label\">
            ";
        // line 7
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["node"] ?? null), "label", [], "any", false, false, true, 7), 7, $this->source), "html", null, true);
        echo "
            </div>
            <div class=\"event_price\">
              ";
        // line 10
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field_price", [], "any", false, false, true, 10), 0, [], "any", false, false, true, 10), 10, $this->source), "html", null, true);
        echo "
            </div>
            <div class=\"event_starting_discription\">
              ";
        // line 13
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "body", [], "any", false, false, true, 13), 13, $this->source), "html", null, true);
        echo "
            </div>
            <div class=\"event_facility_wrap\">
            <div class=\"event_facility\">";
        // line 16
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field__facilities", [], "any", false, false, true, 16), 0, [], "any", false, false, true, 16), 16, $this->source), "html", null, true);
        echo " </div>
            <div class=\"event_facility\">";
        // line 17
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field__facilities", [], "any", false, false, true, 17), 1, [], "any", false, false, true, 17), 17, $this->source), "html", null, true);
        echo " </div>
            <div class=\"event_facility\">";
        // line 18
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field__facilities", [], "any", false, false, true, 18), 2, [], "any", false, false, true, 18), 18, $this->source), "html", null, true);
        echo " </div>
            </div>
            <div class=\"event_closing_discription\">";
        // line 20
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field_closing_discription", [], "any", false, false, true, 20), 0, [], "any", false, false, true, 20), 20, $this->source), "html", null, true);
        echo "</div>
    </div>
</div>";
    }

    public function getTemplateName()
    {
        return "themes/custom/delicious/template/node/node--events.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  81 => 20,  76 => 18,  72 => 17,  68 => 16,  62 => 13,  56 => 10,  50 => 7,  43 => 3,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div class=\"event_section\">
    <div class=\"event_section_image\"> 
      {{ content.field_image.0 }}
    </div>
    <div class=\"event_discription\">
            <div class=\"event_label\">
            {{ node.label }}
            </div>
            <div class=\"event_price\">
              {{ content.field_price.0 }}
            </div>
            <div class=\"event_starting_discription\">
              {{ content.body }}
            </div>
            <div class=\"event_facility_wrap\">
            <div class=\"event_facility\">{{ content.field__facilities.0 }} </div>
            <div class=\"event_facility\">{{ content.field__facilities.1 }} </div>
            <div class=\"event_facility\">{{ content.field__facilities.2 }} </div>
            </div>
            <div class=\"event_closing_discription\">{{ content.field_closing_discription.0 }}</div>
    </div>
</div>", "themes/custom/delicious/template/node/node--events.html.twig", "/var/www/html/delicious/web/themes/custom/delicious/template/node/node--events.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array("escape" => 3);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape'],
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
